# Déploiement sur GitHub Pages

## Étapes pour déployer

1. **Vérifier la configuration**
   - Le fichier `vite.config.js` doit avoir `base: '/vitrine/'`
   - Le `package.json` doit avoir `"homepage": "https://trabifou.github.io/vitrine"`

2. **Installer gh-pages** (si ce n'est pas déjà fait)
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

4. **Configurer GitHub Pages** (première fois seulement)
   - Aller sur GitHub : `https://github.com/trabifou/vitrine`
   - Settings → Pages
   - Source : `gh-pages` branch
   - Cliquer sur Save

5. **Accéder au site**
   - URL : `https://trabifou.github.io/vitrine/`
   - Attendre quelques minutes après le premier déploiement

## Commandes utiles

- `npm run dev` : Lancer en local
- `npm run build` : Build pour la production
- `npm run deploy` : Build + Deploy sur GitHub Pages
