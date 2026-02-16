import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc-UOxjV9si8lEt3TrTE0cnd_hgxjtP9Qp9NNVTczedV6MXRA/viewform";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        World Hemp Day 🌱
      </h1>

      <p className="max-w-xl text-muted-foreground">
        Sign the global petition to recognise hemp as a climate-positive,
        sustainable crop for humanity and the planet.
      </p>

      <Button
