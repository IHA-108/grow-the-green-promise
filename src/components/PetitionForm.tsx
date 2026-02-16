import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc-UOxjV9si8lEt3TrTE0cnd_hgxjtP9Qp9NNVTczedV6MXRA/viewform";

export const PetitionForm = () => {
  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <p className="text-muted-foreground">
        Sign the global petition to support hemp legalization and sustainable development.
      </p>
      <Button
        asChild
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth"
        size="lg"
      >
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          Sign the Petition
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};
