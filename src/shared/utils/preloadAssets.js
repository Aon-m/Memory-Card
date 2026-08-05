const assets = import.meta.glob("@/assets/**/*", {
  eager: true,
  import: "default",
});

const ASSET_TYPES = {
  image: ["png", "jpg", "jpeg", "gif", "svg", "webp"],
  audio: ["mp3", "wav", "ogg"],
};

function getType(extension) {
  for (const [type, extensions] of Object.entries(ASSET_TYPES)) {
    if (extensions.includes(extension)) {
      return type;
    }
  }

  return null;
}

function preload(src, type) {
  return new Promise((resolve, reject) => {
    let asset;

    switch (type) {
      case "image":
        asset = new Image();
        asset.onload = resolve;
        break;

      case "audio":
        asset = new Audio();
        asset.preload = "auto";
        asset.onloadeddata = resolve;
        asset.load();
        break;

      default:
        resolve();
        return;
    }

    asset.onerror = () => reject(new Error(`Failed to load ${src}`));
    asset.src = src;
  });
}

export default async function preloadAssets(...ignore) {
  const ignored = new Set(ignore);

  await Promise.all(
    Object.entries(assets)
      .filter(([path]) => {
        const ext = path.split(".").pop().toLowerCase();
        return !ignored.has(ext);
      })
      .map(([path, src]) => {
        const ext = path.split(".").pop().toLowerCase();
        const type = getType(ext);

        return preload(src, type);
      }),
  );
}