import { TSnackbarProps, Variant } from "@components/types";

export const Snackbar = ({
  open,
  text,
  icon: Icon,
  handleClose,
  variant,
}: TSnackbarProps) => {
  const variants: Map<Variant, string> = new Map([
    [Variant.Success, 'bg-green-500'],
    [Variant.Error, 'bg-red-500'],
    [Variant.Info, 'bg-blue-500'],
    [Variant.Warning, 'bg-yellow-500'],
  ]);

  const selectedVariant = variants.get(variant);

  return open ? (
    <>
      <div className={`${selectedVariant} flex min-w-[320px] items-center truncate whitespace-nowrap rounded-lg py-3 px-3.5 text-xs text-white shadow-md`}>
        {
          Icon && (
            <span className="mr-4 text-base" aria-hidden="true">
              <Icon className="h-5 w-5" />
            </span>
          )
        }
        <span>{text}</span>
        <button
          className="bg-transparent !p-0 text-current underline"
          onClick={handleClose}>
            Close
        </button>
      </div>
    </>
  ) : null;
}
