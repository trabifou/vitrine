# Vitrine - Showcase Portfolio

Une vitrine automatisée qui se déploie automatiquement via GitHub Actions.

## 🚀 Automation

Ce repository est entièrement automatisé :

- **Déploiement automatique** : Chaque push sur la branche principale déclenche un déploiement automatique
- **GitHub Pages** : Le site est automatiquement publié sur GitHub Pages
- **Mise à jour en temps réel** : Les changements sont visibles immédiatement après le push

## 👀 Voir le résultat

### Option 1: GitHub Pages (Recommandé)
Une fois le workflow exécuté, votre vitrine sera disponible à :
```
https://trabifou.github.io/vitrine/
```

### Option 2: Actions Tab
1. Allez dans l'onglet **Actions** de ce repository
2. Cliquez sur le workflow "Deploy Vitrine to GitHub Pages"
3. Cliquez sur le dernier run pour voir les détails
4. L'URL de déploiement sera affichée dans l'étape "Deploy to GitHub Pages"

### Option 3: Pages Settings
1. Allez dans **Settings** > **Pages** de ce repository
2. L'URL de votre site sera affichée en haut de la section

## 🔧 Configuration requise

Pour activer l'automation complète :

1. **Activer GitHub Pages** :
   - Allez dans Settings > Pages
   - Source: "GitHub Actions"
   - Sauvegardez

2. **Permissions** : Les permissions sont configurées automatiquement dans le workflow

## 📁 Structure

```
vitrine/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # JavaScript interactif
├── .github/workflows/  # Automation GitHub Actions
│   └── deploy.yml      # Workflow de déploiement
└── README.md           # Documentation
```

## 🎨 Personnalisation

Modifiez simplement les fichiers HTML, CSS ou JS et poussez vos changements. Le site sera automatiquement mis à jour !

---

*Dernière mise à jour automatique : voir le timestamp sur le site déployé*
