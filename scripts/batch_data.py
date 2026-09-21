# -*- coding: utf-8 -*-
import sys
import os

# Add current scripts directory to python path
sys.path.insert(0, os.path.dirname(__file__))

from batch_1 import BATCH_1
from batch_2 import BATCH_2
from batch_3 import BATCH_3

print(f"Loaded: BATCH_1 = {len(BATCH_1)}, BATCH_2 = {len(BATCH_2)}, BATCH_3 = {len(BATCH_3)}")
assert len(BATCH_1) == 100, f"BATCH_1 is {len(BATCH_1)}"
assert len(BATCH_2) == 100, f"BATCH_2 is {len(BATCH_2)}"
assert len(BATCH_3) == 100, f"BATCH_3 is {len(BATCH_3)}"
print(f"Total Goethe C1 Verbs = {len(BATCH_1) + len(BATCH_2) + len(BATCH_3)}")
