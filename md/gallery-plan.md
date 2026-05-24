# Gallery — Dynamic Instagram Feed Plan

## The Short Answer

Yes, it is possible — but with one hard requirement: **the customer's Instagram account must be a Business or Creator account** (not a personal account). Meta no longer supports personal accounts in any of their APIs as of December 2024.

---

## What Changed (December 2024)

Meta shut down the **Instagram Basic Display API** permanently on 4 December 2024. It is completely dead. Any tutorial or Stack Overflow answer referencing it is now obsolete.

What remains:
- **Instagram Graph API** — for Business/Creator accounts, requires a Meta developer app, OAuth flow, and access token rotation.
- **Instagram API with Instagram Login** — newer, simpler version of the above. Still requires a Professional account. Still requires OAuth.

Both official paths involve the customer authorising our app and us managing token refresh. That is doable but adds significant maintenance overhead.

---

## Options (Ranked by Effort)

### Option 1 — Third-Party Feed Service (Recommended)

Services like **[Behold](https://behold.so)** sit between us and the Meta API. The customer connects their Instagram account to Behold once, and Behold exposes a clean **JSON endpoint** that our Angular app can fetch. No OAuth in our code, no token rotation, no Meta app submission.

**How it works:**
1. Customer goes to behold.so and connects their Business/Creator Instagram.
2. Behold gives us a **feed ID** and a JSON URL like:
   `https://feeds.behold.so/{FEED_ID}`
3. Angular calls that URL at runtime, gets back an array of posts with `mediaUrl`, `caption`, `permalink`, `timestamp`, etc.
4. We render them in our gallery component.

**Pros:**
- We write ~30 lines of Angular code.
- Behold handles token refresh, API changes, rate limits.
- JSON feed = fully custom UI, not an iframe.
- No images stored in our repo.

**Cons:**
- Third-party dependency.
- Behold has a free tier (limited posts shown); paid plans for more.
- If Behold goes down, gallery is empty (we can fall back to static images).

---

### Option 2 — Official Meta Graph API (DIY)

Build our own Meta Developer App, implement OAuth, store a long-lived token, set up a token refresh cron, and call:
`GET https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp`

**Pros:**
- No third-party dependency.
- Full control.

**Cons:**
- Requires Meta app review and approval (can take weeks).
- Long-lived tokens expire every 60 days — need a backend job to refresh them.
- Needs a backend or serverless function (our current app is fully prerendered static).
- Significant ongoing maintenance when Meta changes their API (which they do often).

**Not recommended** for a client site of this scale unless there is a specific reason to avoid third-party services.

---

### Option 3 — Manual Static Gallery (Current Fallback)

Keep `galleryItems` in `business.ts` and update it manually when the client provides new photos. Images hosted in `assets/` or on any CDN (Cloudinary free tier, etc.).

**When to use:** If the customer's Instagram is a personal account and they cannot or will not convert it to Business/Creator.

---

## Recommended Implementation Plan (Option 1 — Behold)

### Step 0 — Customer Action Required

The customer must:
1. Convert their Instagram account to **Creator** or **Business** (free, takes 2 minutes in the Instagram app under Settings → Account Type).
2. Sign up at [behold.so](https://behold.so) and connect their Instagram.
3. Create a feed and share the **Feed ID** with us.

> **Wayne Heart's Instagram**: `@duwayne_steenberg` — check if already Business/Creator.

### Step 1 — Move Feed ID to `business.ts`

```typescript
// In business.ts
instagramFeedId: 'REPLACE_WITH_BEHOLD_FEED_ID',
```

### Step 2 — Create a `GalleryService`

`src/app/common/service/gallery.service.ts`

```typescript
@Injectable({ providedIn: 'root' })
export class GalleryService {
  private http = inject(HttpClient);

  getFeed(feedId: string) {
    return this.http.get<BeholdPost[]>(`https://feeds.behold.so/${feedId}`);
  }
}

export interface BeholdPost {
  id: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  thumbnailUrl?: string;   // for videos
  caption: string;
  permalink: string;
  timestamp: string;
}
```

### Step 3 — Gallery Page Component

Create `src/app/page/gallery/` with a component that:
- Calls `GalleryService.getFeed()` on init
- Renders a masonry or grid layout
- Filters by category (if we map caption hashtags → categories)
- Falls back to `BUSINESS.galleryItems` if the fetch fails

### Step 4 — Activate the Route

Uncomment the `/gallery` route in `app.routes.ts`.

### Step 5 — Prerendering Consideration

Because the gallery is live data, the gallery route should use `RenderMode.Server` or `RenderMode.Client` (not `Prerender`) — otherwise the SSR build would bake in a snapshot of the feed at build time.

In `app.routes.server.ts`:
```typescript
{ path: 'gallery', renderMode: RenderMode.Client }
```

---

## Summary

| | Option 1 (Behold) | Option 2 (DIY API) | Option 3 (Static) |
|---|---|---|---|
| Dev effort | Low | High | Minimal |
| Maintenance | Low | High | Manual uploads |
| Requires Pro Instagram | Yes | Yes | No |
| Images self-hosted | No | No | Yes |
| Live / always fresh | Yes | Yes | No |
| Cost | Free tier / ~$7/mo | Free (Meta) | Free |

**Recommended path**: Option 1 (Behold) if the customer can convert to a Creator account. Option 3 as fallback if they cannot or will not.

---

## Immediate Next Step

Confirm with Wayne Heart whether `@duwayne_steenberg` is already a Business or Creator account. If yes, we can implement Option 1 end-to-end in a single session.
