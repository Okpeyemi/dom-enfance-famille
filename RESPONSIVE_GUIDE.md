# Guide de Responsivité - Dom'Enfance & Famille

## ✅ Breakpoints Tailwind CSS

```
sm: 640px   - Petits téléphones en paysage
md: 768px   - Tablettes
lg: 1024px  - Petits ordinateurs portables
xl: 1280px  - Grands écrans
2xl: 1536px - Très grands écrans
```

## 🎯 Header Fixe

### Fonctionnalités
- **Position fixe** en haut de page (z-index: 50)
- **Shadow au scroll** : ombre ajoutée après 10px de défilement
- **Logo responsive** : 
  - Mobile (< 640px) : 120px
  - Tablette (640-768px) : 150px
  - Desktop (> 768px) : 180px

### Menu Desktop (lg+)
- Navigation horizontale visible à partir de 1024px
- Espacement adaptatif : gap-4 (lg) → gap-6 (xl)
- Tailles de texte : base (lg) → lg (xl)

### Menu Mobile (< lg)
- **Hamburger animé** avec Framer Motion
  - Transformation en X lors de l'ouverture
  - Animation fluide (300ms)
- **Menu déroulant** avec animation height
- **Liens verticaux** avec espacement confortable
- **Fermeture automatique** au clic sur un lien

## 📱 Responsivité par Composant

### Hero (Page d'accueil)
```tsx
// Grid responsive
grid-cols-1 lg:grid-cols-2

// Titres
text-4xl md:text-5xl lg:text-6xl

// Images
max-w-[700px] aspect-square
```

### Mission
```tsx
// Container
px-6 md:px-12

// Titres
text-4xl md:text-5xl

// Texte
text-lg md:text-2xl
```

### ActionsPhares
```tsx
// Espacement
gap-8 md:gap-12

// Boutons
px-8 md:px-12 py-3 md:py-4
```

### Partenaires
```tsx
// Grid logos
grid-cols-2 md:grid-cols-4

// Boutons
flex-col md:flex-row
```

### Footer
```tsx
// Grid
grid-cols-1 md:grid-cols-3

// Espacement
gap-8 md:gap-12
```

## 🎨 Classes Responsives Communes

### Espacement
```css
/* Padding */
px-4 sm:px-6 lg:px-12
py-8 md:py-12 lg:py-16

/* Gap */
gap-4 md:gap-6 lg:gap-8

/* Margin */
mb-6 md:mb-8 lg:mb-12
```

### Typographie
```css
/* Titres principaux */
text-3xl md:text-4xl lg:text-5xl xl:text-6xl

/* Titres secondaires */
text-2xl md:text-3xl lg:text-4xl

/* Texte courant */
text-base md:text-lg lg:text-xl

/* Petits textes */
text-sm md:text-base
```

### Layout
```css
/* Grilles */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

/* Flex direction */
flex-col md:flex-row

/* Visibilité */
hidden md:block
block md:hidden
```

## 📐 Conteneurs

### Container Standard
```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-12">
  {/* Contenu */}
</div>
```

### Section Standard
```tsx
<section className="w-full bg-white py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    {/* Contenu */}
  </div>
</section>
```

## 🖼️ Images Responsives

### Next Image
```tsx
<Image
  src="/image.png"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
  priority // Pour les images above the fold
/>
```

### Aspect Ratio
```tsx
<div className="relative w-full aspect-square md:aspect-video">
  <Image src="/image.png" fill className="object-cover" />
</div>
```

## 🔘 Boutons Responsifs

### Bouton CTA
```tsx
<button className="
  px-6 md:px-8 lg:px-12
  py-3 md:py-4
  text-base md:text-lg lg:text-xl
  rounded-full
  font-bold
">
  Texte
</button>
```

### Bouton Mobile Full Width
```tsx
<button className="
  w-full sm:w-auto
  px-8 py-4
  text-lg
">
  Texte
</button>
```

## 📋 Formulaires Responsifs

### Input
```tsx
<input className="
  w-full
  px-4 md:px-6
  py-3 md:py-4
  text-base md:text-lg
  border border-gray-300
  rounded-lg
" />
```

### Grid Formulaire
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {/* Champs */}
</div>
```

## 🎯 Bonnes Pratiques

### 1. Mobile First
Toujours commencer par le design mobile, puis ajouter les breakpoints

```tsx
// ✅ Bon
className="text-base md:text-lg lg:text-xl"

// ❌ Mauvais
className="text-xl md:text-base"
```

### 2. Espacement Cohérent
Utiliser une échelle cohérente : 4, 6, 8, 12, 16, 20, 24

```tsx
// Espacement progressif
gap-4 md:gap-6 lg:gap-8
```

### 3. Visibilité Conditionnelle
```tsx
// Desktop seulement
<div className="hidden lg:block">Desktop</div>

// Mobile seulement
<div className="block lg:hidden">Mobile</div>
```

### 4. Flex Direction
```tsx
// Vertical sur mobile, horizontal sur desktop
<div className="flex flex-col md:flex-row gap-4">
  {/* Items */}
</div>
```

### 5. Max Width
Limiter la largeur sur grands écrans

```tsx
<div className="max-w-7xl mx-auto">
  {/* Contenu */}
</div>
```

## 🧪 Tests Responsifs

### Breakpoints à tester
- 375px (iPhone SE)
- 390px (iPhone 12/13/14)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (Desktop)
- 1920px (Full HD)

### Checklist
- [ ] Logo visible et bien dimensionné
- [ ] Menu mobile fonctionnel
- [ ] Textes lisibles (min 16px)
- [ ] Boutons cliquables (min 44x44px)
- [ ] Images non déformées
- [ ] Pas de scroll horizontal
- [ ] Espacement cohérent
- [ ] Animations fluides

## 🚀 Optimisations

### Performance
- Utiliser `next/image` pour toutes les images
- Lazy loading automatique avec Next.js
- Priority pour images above the fold

### Accessibilité
- Touch targets min 44x44px
- Contraste suffisant (WCAG AA)
- Navigation au clavier
- Labels ARIA pour menu mobile

## ✅ Résultat

Le site est maintenant entièrement responsive avec :
- ✅ Header fixe avec menu mobile animé
- ✅ Breakpoints cohérents sur toutes les pages
- ✅ Images optimisées et responsives
- ✅ Typographie adaptative
- ✅ Espacement harmonieux
- ✅ Navigation mobile fluide
- ✅ Performance optimale

Tous les composants s'adaptent parfaitement du mobile (320px) au desktop (1920px+) ! 📱💻🖥️
