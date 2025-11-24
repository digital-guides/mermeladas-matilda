import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      
      // Mostrar el prompt después de 2 segundos
      setTimeout(() => {
        setShowPrompt(true);
      }, 2000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setIsInstallable(false);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!isInstallable || !showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-md mx-auto bg-card border-2 border-primary/20 rounded-2xl shadow-2xl p-6">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Download className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1 pr-6">
            <h3 className="font-bold text-lg mb-2 text-foreground">
              Instalar Recetario
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Instala la app en tu dispositivo para acceder rápidamente y usarla sin conexión
            </p>
            
            <div className="flex gap-3">
              <Button
                onClick={handleInstall}
                className="flex-1"
              >
                <Download className="h-4 w-4 mr-2" />
                Instalar
              </Button>
              <Button
                onClick={handleDismiss}
                variant="outline"
                className="flex-1"
              >
                Ahora no
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
