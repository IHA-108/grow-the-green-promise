const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc-UOxjV9si8lEt3TrTE0cnd_hgxjtP9Qp9NNVTczedV6MXRA/viewform?embedded=true";

export const PetitionForm = () => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <p className="text-muted-foreground">
        Sign the global petition to support hemp legalization and sustainable development.
      </p>
      <div className="rounded-lg border border-border overflow-hidden">
        <iframe
          src={GOOGLE_FORM_URL}
          width="100%"
          height="600"
          frameBorder="0"
          title="Sign the Petition"
          className="bg-background"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
