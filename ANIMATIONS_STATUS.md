# État des animations du projet

## ✅ Composants avec animations

### Page d'accueil
- ✅ **Hero.tsx** - FadeIn (texte), ScaleIn (image), AnimatedLink (bouton)
- ✅ **Mission.tsx** - FadeIn (titre et contenu)
- ✅ **ActionsPhares.tsx** - FadeIn (titre, liste, bouton)
- ✅ **Partenaires.tsx** - FadeIn (titre), ScaleIn (logos), AnimatedLink (boutons)

### Pages à animer

#### Page Association
- [ ] **association/Hero.tsx**
- [ ] **association/Valeurs.tsx**
- [ ] **association/Avantages.tsx**
- [ ] **association/Gouvernance.tsx**

#### Page Nos actions
- [ ] **nos-actions/Hero.tsx**
- [ ] **nos-actions/CartesActions.tsx**

#### Page Devenir membre
- [ ] **devenir-membre/Hero.tsx**
- [ ] **devenir-membre/PourquoiAdherer.tsx**
- [ ] **devenir-membre/Gouvernance.tsx**
- [ ] **devenir-membre/FaireUnDon.tsx**

#### Page Actualités
- [ ] **actualites/Hero.tsx**
- [ ] **actualites/ArticlesList.tsx**
- [ ] **actualites/ReseauxSociaux.tsx**

#### Page Contact
- [ ] **contact/Hero.tsx**
- [ ] **contact/FAQ.tsx**
- [ ] **WavyLine.tsx**

#### Page Faire un don
- [ ] **faire-un-don/DonInfo.tsx**

#### Composants globaux
- [ ] **Header.tsx**
- [ ] **Footer.tsx**
- [ ] **Line.tsx**

## Types d'animations disponibles

1. **FadeIn** - Apparition en fondu avec déplacement
   - Directions: up, down, left, right, none
   - Usage: Textes, sections

2. **ScaleIn** - Apparition avec zoom
   - Usage: Images, cartes, logos

3. **AnimatedLink** - Liens avec effet hover/tap
   - Usage: Boutons, liens CTA

4. **AnimatedButton** - Boutons avec effet hover/tap
   - Usage: Boutons de formulaire

5. **StaggerContainer** - Container pour animations échelonnées
   - Usage: Listes d'éléments

## Recommandations

- Utiliser des délais progressifs (0.2s, 0.4s, 0.6s) pour créer un effet de cascade
- Ne pas abuser des animations (max 3-4 par section)
- Privilégier FadeIn direction="up" pour les textes
- Utiliser ScaleIn pour les images et éléments visuels
- AnimatedLink pour tous les boutons CTA
