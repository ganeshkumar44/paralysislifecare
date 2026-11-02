const base = import.meta.env.BASE_URL;

export function Icon({ name, width, height, alt = "" }) {
  return (
    <img
      src={`${base}assets/icons/${name}.svg`}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

export function Photo({ file, width, height, alt }) {
  return (
    <img
      src={`${base}assets/images/${file}`}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
