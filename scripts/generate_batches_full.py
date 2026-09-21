# -*- coding: utf-8 -*-
import os
import json

# Full dataset of 300 Goethe C1 verbs
# Each tuple: (word, category, register, defDe, defEn, collocation, synonyms, sentence, cloze, translationEn)

from batch_data import BATCH_1, BATCH_2, BATCH_3

def write_batch(filename, items, start_idx):
    lines = [
        "import { VocabularyItem } from '../types';",
        "",
        f"export const {filename.split('/')[-1].replace('.ts', '').upper()}: VocabularyItem[] = ["
    ]
    for i, item in enumerate(items):
        word, cat, reg, def_de, def_en, coll, syns, sent, cloze, trans_en = item
        idx = start_idx + i
        item_id = f"c1_v_{idx:03d}"
        active_prompt = f"Wie lautet das C1-Verb für: „{def_de}“ (Kollokation: {coll})?"
        
        escaped_word = word.replace("'", "\\'")
        escaped_def_de = def_de.replace("'", "\\'")
        escaped_def_en = def_en.replace("'", "\\'")
        escaped_coll = coll.replace("'", "\\'")
        escaped_sent = sent.replace("'", "\\'")
        escaped_cloze = cloze.replace("'", "\\'")
        escaped_trans_en = trans_en.replace("'", "\\'")
        escaped_prompt = active_prompt.replace("'", "\\'")
        syns_str = ", ".join([f"'{s}'" for s in syns])

        obj_str = f"""  {{
    id: '{item_id}',
    word: '{escaped_word}',
    wordClass: 'Verb',
    category: '{cat}',
    level: 'C1',
    register: '{reg}',
    definitionDe: '{escaped_def_de}',
    definitionEn: '{escaped_def_en}',
    collocation: '{escaped_coll}',
    synonyms: [{syns_str}],
    examples: [
      {{
        sentence: '{escaped_sent}',
        clozeSentence: '{escaped_cloze}',
        translationEn: '{escaped_trans_en}'
      }}
    ],
    activeRecallPrompt: '{escaped_prompt}',
    myelinationLevel: 0,
    consecutiveCorrect: 0,
    timesReviewed: 0,
    timesIncorrect: 0,
    lastReviewedAt: null,
    inMistakeQueue: false,
    isBookmarked: false
  }},"""
        lines.append(obj_str)
    
    lines.append("];\n")
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(items)} items to {filename}")

if __name__ == "__main__":
    write_batch("src/data/c1VerbsBatch1.ts", BATCH_1, 1)
    write_batch("src/data/c1VerbsBatch2.ts", BATCH_2, 101)
    write_batch("src/data/c1VerbsBatch3.ts", BATCH_3, 201)
