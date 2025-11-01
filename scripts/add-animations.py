#!/usr/bin/env python3
"""
Script pour ajouter automatiquement les imports d'animations aux composants
"""

import os
import re

# Composants à traiter
components_to_animate = [
    "components/association/Valeurs.tsx",
    "components/association/Avantages.tsx",
    "components/association/Gouvernance.tsx",
    "components/nos-actions/Hero.tsx",
    "components/nos-actions/CartesActions.tsx",
    "components/devenir-membre/Hero.tsx",
    "components/devenir-membre/PourquoiAdherer.tsx",
    "components/devenir-membre/Gouvernance.tsx",
    "components/devenir-membre/FaireUnDon.tsx",
    "components/actualites/Hero.tsx",
    "components/actualites/ArticlesList.tsx",
    "components/actualites/ReseauxSociaux.tsx",
    "components/contact/FAQ.tsx",
    "components/faire-un-don/DonInfo.tsx",
]

def add_animation_imports(file_path):
    """Ajoute les imports d'animations si pas déjà présents"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Vérifier si les imports sont déjà présents
    if 'FadeIn' in content or 'ScaleIn' in content:
        print(f"✓ {file_path} - Animations déjà présentes")
        return False
    
    # Déterminer le chemin relatif correct
    depth = file_path.count('/') - 1
    import_path = '../' * depth + 'animations/FadeIn'
    
    # Ajouter les imports après les autres imports
    import_statement = f'import FadeIn from "{import_path}";\nimport ScaleIn from "{import_path.replace("FadeIn", "ScaleIn")}";\n'
    
    # Trouver la dernière ligne d'import
    lines = content.split('\n')
    last_import_index = 0
    for i, line in enumerate(lines):
        if line.startswith('import ') or line.startswith('import{'):
            last_import_index = i
    
    # Insérer les nouveaux imports
    lines.insert(last_import_index + 1, import_statement.strip())
    
    new_content = '\n'.join(lines)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ {file_path} - Imports ajoutés")
    return True

def main():
    base_path = "e:/projet/dom-enfance-famille/"
    
    print("🎬 Ajout des imports d'animations...\n")
    
    modified_count = 0
    for component in components_to_animate:
        full_path = os.path.join(base_path, component)
        if os.path.exists(full_path):
            if add_animation_imports(full_path):
                modified_count += 1
        else:
            print(f"✗ {component} - Fichier non trouvé")
    
    print(f"\n✅ {modified_count} fichiers modifiés")
    print("\n📝 Note: Les imports ont été ajoutés. Vous devez maintenant wrapper")
    print("   les éléments avec <FadeIn> et <ScaleIn> manuellement.")

if __name__ == "__main__":
    main()
