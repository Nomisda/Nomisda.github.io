# Mysteriöse Passwort-App

Eine mysteriöse statische Web-App mit Passwort-geschützten Seiten für Azure Static Web Apps.

## 🔐 Verfügbare Passwörter

Die App enthält 4 verschiedene Codes, die zu verschiedenen geheimen Seiten führen:

- **shadow** - Führt zu einer dunklen, mysteriösen Seite
- **enigma** - Enthüllt ein Rätsel
- **phantom** - Beschwört einen Geist
- **cipher** - Entschlüsselt einen Code

## 🚀 Deployment auf Azure Static Web Apps

### Voraussetzungen
- Ein Azure-Konto
- Ein GitHub-Repository

### Deployment-Schritte

1. **Azure Static Web App erstellen:**
   - Gehe zum Azure Portal (https://portal.azure.com)
   - Klicke auf "Ressource erstellen"
   - Suche nach "Static Web App"
   - Klicke auf "Erstellen"

2. **Konfiguration:**
   - **Subscription:** Wähle dein Azure-Abonnement
   - **Resource Group:** Erstelle eine neue oder wähle eine bestehende
   - **Name:** Gib deiner App einen Namen (z.B. "mystery-app")
   - **Region:** Wähle eine Region (z.B. "West Europe")
   - **Deployment source:** Wähle "GitHub"
   - Autorisiere Azure, auf dein GitHub-Repository zuzugreifen
   - **Repository:** Wähle dein Repository
   - **Branch:** Wähle den Branch (z.B. "main")

3. **Build-Konfiguration:**
   - **Build Presets:** Wähle "Custom"
   - **App location:** `/`
   - **Api location:** Leer lassen
   - **Output location:** Leer lassen

4. **Erstellen:**
   - Klicke auf "Review + create"
   - Klicke auf "Create"

5. **Deployment:**
   - Azure erstellt automatisch einen GitHub Actions Workflow
   - Der Workflow wird bei jedem Push auf den main-Branch ausgeführt
   - Nach wenigen Minuten ist deine App live!

### Manuelles Deployment (ohne GitHub)

Falls du kein GitHub verwenden möchtest:

```bash
# Azure CLI installieren und einloggen
az login

# Static Web App erstellen
az staticwebapp create \
  --name mystery-app \
  --resource-group myResourceGroup \
  --source ./ \
  --location "westeurope" \
  --branch main \
  --app-location "/" \
  --output-location ""

# Deployment-Token abrufen
az staticwebapp secrets list --name mystery-app --resource-group myResourceGroup

# Mit dem SWA CLI deployen
npm install -g @azure/static-web-apps-cli
swa deploy --deployment-token <DEIN_TOKEN>
```

## 📁 Projektstruktur

```
.
├── index.html              # Hauptseite mit Passwort-Eingabe
├── secret1.html            # Geheime Seite 1 (shadow)
├── secret2.html            # Geheime Seite 2 (enigma)
├── secret3.html            # Geheime Seite 3 (phantom)
├── secret4.html            # Geheime Seite 4 (cipher)
├── styles.css              # Styling für die Hauptseite
├── secret-styles.css       # Styling für die geheimen Seiten
├── script.js               # Passwort-Logik
├── staticwebapp.config.json # Azure Static Web Apps Konfiguration
└── README.md               # Diese Datei
```

## 🎨 Features

- **Mysteriöses Design:** Dunkles Theme mit Neon-Grün-Akzenten
- **Glitch-Effekte:** Animierte Text-Effekte für mehr Atmosphäre
- **Responsive:** Funktioniert auf Desktop und Mobile
- **Mehrere Passwörter:** 4 verschiedene Codes führen zu unterschiedlichen Seiten
- **Animationen:** Smooth Transitions und Hover-Effekte
- **Partikel-Effekte:** Schwebende Partikel im Hintergrund

## 🔧 Anpassungen

### Neue Passwörter hinzufügen

Bearbeite `script.js` und füge neue Einträge zum `passwords`-Objekt hinzu:

```javascript
const passwords = {
    'shadow': 'secret1.html',
    'enigma': 'secret2.html',
    'phantom': 'secret3.html',
    'cipher': 'secret4.html',
    'deinneuercode': 'secret5.html'  // Neue Zeile
};
```

Erstelle dann eine neue HTML-Datei (z.B. `secret5.html`) mit dem entsprechenden Inhalt.

### Bilder ändern

Die geheimen Seiten verwenden Bilder von Unsplash. Du kannst die URLs in den `secret*.html` Dateien ändern:

```html
<img src="DEINE_BILD_URL" alt="Mysteriöses Bild" class="secret-image">
```

## 📝 Lizenz

Dieses Projekt ist frei verfügbar und kann beliebig angepasst werden.
