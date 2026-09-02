type FormErrorsProps = {
  errors?: string[];
};

export default function FormErrors({
  errors = [],
}: FormErrorsProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div
      role="alert"
      className="rounded-2xl border border-red-200 bg-red-50 p-5"
    >
      <h3 className="text-sm font-bold text-red-800">
        Please check your information
      </h3>

      <ul className="mt-3 space-y-2">
        {errors.map((error, index) => (
          <li
            key={`${error}-${index}`}
            className="text-sm leading-6 text-red-700"
          >
            • {error}
          </li>
        ))}
      </ul>
    </div>
  );
}