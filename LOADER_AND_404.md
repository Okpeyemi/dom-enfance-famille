# Loader et Page 404 - Documentation

## ✅ Fonctionnalités implémentées

### 1. Page 404 personnalisée (`app/not-found.tsx`)
- Design moderne avec les couleurs de la marque (#E6007E, #1E88E5, #94C11F)
- Animations Framer Motion (ScaleIn, FadeIn)
- Boutons d'action : Retour à l'accueil et Contact
- Éléments décoratifs colorés
- Message clair et convivial

### 2. Loader global (`components/LoadingProvider.tsx`)
- **Affichage automatique** lors des changements de page
- **Synchronisation avec les animations** : le loader reste visible jusqu'à ce que les animations soient prêtes
- **Design cohérent** avec les couleurs de la marque
- **Animations fluides** :
  - 3 points colorés qui rebondissent
  - Barre de progression avec dégradé
  - Nom de l'association
  - Transition en fondu

### 3. Composant PageLoader (`components/PageLoader.tsx`)
- Alternative plus simple au LoadingProvider
- Peut être utilisé pour des chargements spécifiques

## 🎨 Design du Loader

### Éléments visuels
1. **3 points animés** aux couleurs de la marque :
   - Rose (#E6007E)
   - Bleu (#1E88E5)
   - Vert (#94C11F)
   - Animation de rebond avec délais progressifs

2. **Texte** :
   - Nom de l'association en rose
   - "Chargement..." en gris

3. **Barre de progression** :
   - Dégradé des 3 couleurs
   - Animation de 0% à 100%
   - Durée : 1 seconde

## ⚙️ Configuration

### Durées de chargement
```typescript
// LoadingProvider.tsx
- Changement de page : 1000ms (1 seconde)
- Chargement initial : 1200ms (1.2 secondes)
- Transition de sortie : 400ms
```

### Ajustement des durées
Pour modifier la durée du loader, éditer `LoadingProvider.tsx` :

```typescript
// Ligne 28 - Durée lors du changement de page
const loadTimer = setTimeout(() => {
  setIsLoading(false);
}, 1000); // Modifier cette valeur

// Ligne 38 - Durée du chargement initial
const initialTimer = setTimeout(() => {
  setIsLoading(false);
}, 1200); // Modifier cette valeur
```

## 🔧 Intégration

### Layout principal (`app/layout.tsx`)
```tsx
import LoadingProvider from "@/components/LoadingProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LoadingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
```

## 📱 Comportement

### Lors du chargement initial
1. Le loader s'affiche immédiatement
2. Durée : 1.2 secondes
3. Transition en fondu
4. La page apparaît progressivement

### Lors du changement de page
1. Détection automatique via `usePathname()`
2. Le loader s'affiche
3. Durée : 1 seconde (temps pour les animations de la page)
4. Transition fluide vers la nouvelle page

### Page 404
1. Affichage automatique pour les URLs invalides
2. Animations d'entrée (ScaleIn + FadeIn)
3. Boutons d'action pour navigation
4. Design cohérent avec le reste du site

## 🎯 Avantages

1. **Expérience utilisateur améliorée** :
   - Feedback visuel lors des transitions
   - Pas de "flash" de contenu non stylé
   - Animations fluides

2. **Performance** :
   - Masque le temps de chargement des animations
   - Transition douce entre les pages
   - Optimisé avec AnimatePresence

3. **Cohérence visuelle** :
   - Design aligné avec la charte graphique
   - Animations harmonieuses
   - Branding renforcé

4. **Accessibilité** :
   - Messages clairs
   - Navigation facilitée (404)
   - Indicateurs de progression

## 🚀 Personnalisation

### Modifier les couleurs
Éditer les classes Tailwind dans `LoadingProvider.tsx` :
```tsx
className="bg-[#E6007E]" // Rose
className="bg-[#1E88E5]" // Bleu
className="bg-[#94C11F]" // Vert
```

### Modifier l'animation
Ajuster les propriétés `motion` :
```tsx
animate={{
  y: [0, -20, 0],      // Amplitude du rebond
  scale: [1, 1.2, 1],  // Échelle
}}
transition={{
  duration: 0.8,        // Durée
  repeat: Infinity,     // Répétition
  delay: 0.2,          // Délai
}}
```

## ✅ Résultat

- ✅ Loader global fonctionnel
- ✅ Synchronisé avec les animations Framer Motion
- ✅ Page 404 personnalisée et animée
- ✅ Transitions fluides entre les pages
- ✅ Design cohérent avec la marque
- ✅ Expérience utilisateur optimale

Le système de chargement est maintenant complet et professionnel ! 🎉
