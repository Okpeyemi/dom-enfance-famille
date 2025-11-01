# Composants d'animation

Ce dossier contient des composants d'animation réutilisables basés sur Framer Motion.

## Composants disponibles

### FadeIn
Anime l'apparition d'un élément avec un effet de fondu et de déplacement.

```tsx
import { FadeIn } from '@/components/animations';

<FadeIn direction="up" delay={0.2} duration={0.5}>
  <div>Votre contenu</div>
</FadeIn>
```

**Props:**
- `direction`: "up" | "down" | "left" | "right" | "none" (défaut: "up")
- `delay`: nombre en secondes (défaut: 0)
- `duration`: nombre en secondes (défaut: 0.5)
- `className`: classes CSS additionnelles

### ScaleIn
Anime l'apparition d'un élément avec un effet de zoom.

```tsx
import { ScaleIn } from '@/components/animations';

<ScaleIn delay={0.3} duration={0.8}>
  <img src="/image.png" alt="Image" />
</ScaleIn>
```

**Props:**
- `delay`: nombre en secondes (défaut: 0)
- `duration`: nombre en secondes (défaut: 0.5)
- `className`: classes CSS additionnelles

### AnimatedButton
Bouton avec animations au hover et au clic.

```tsx
import { AnimatedButton } from '@/components/animations';

<AnimatedButton 
  onClick={handleClick}
  className="bg-blue-500 text-white px-4 py-2"
>
  Cliquez-moi
</AnimatedButton>
```

**Props:**
- `onClick`: fonction de callback
- `type`: "button" | "submit" | "reset" (défaut: "button")
- `className`: classes CSS

### AnimatedLink
Lien Next.js avec animations au hover et au clic.

```tsx
import { AnimatedLink } from '@/components/animations';

<AnimatedLink 
  href="/page"
  className="text-blue-500"
>
  Lien animé
</AnimatedLink>
```

**Props:**
- `href`: URL de destination
- `target`: "_blank" | "_self" etc.
- `rel`: "noopener noreferrer" etc.
- `className`: classes CSS

## Exemples d'utilisation

### Section avec texte et image
```tsx
<section>
  <FadeIn direction="right" duration={0.8}>
    <h1>Titre</h1>
    <p>Description</p>
  </FadeIn>
  
  <ScaleIn delay={0.3} duration={0.8}>
    <img src="/image.png" alt="Image" />
  </ScaleIn>
</section>
```

### Liste d'éléments avec délais progressifs
```tsx
{items.map((item, index) => (
  <FadeIn key={item.id} delay={index * 0.1}>
    <div>{item.content}</div>
  </FadeIn>
))}
```
