import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <EmptyState
        title="404: Signal lost"
        description="This page doesn't exist, or has been moved. Head back to the command center."
        action={<Button href="/">Return home</Button>}
      />
    </div>
  );
}
