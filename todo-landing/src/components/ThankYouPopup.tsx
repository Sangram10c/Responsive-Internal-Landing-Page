import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

interface ThankYouPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThankYouPopup({ open, onOpenChange }: ThankYouPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="items-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <DialogTitle className="text-xl">Thank you for connect with us</DialogTitle>
          <DialogDescription>
            Thank you for your interest! We'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <Button variant="hero" size="lg" className="mt-4" onClick={() => onOpenChange(false)}>
          Continue Browsing
        </Button>
      </DialogContent>
    </Dialog>
  );
}
