#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
douplicator_checker.py

Liest data.js im selben Ordner und erzeugt report.txt mit allen Duplikaten
bezüglich des Attributs "front". Ein Duplikat liegt vor, wenn derselbe
front-String mehr als einmal in den Karten vorkommt.

Im Report werden pro Vorkommen auch der Set-Name, die Zeilennummer
und der zugehörige back-Text ausgegeben.
"""

import os
import re


DATA_FILE = "data.js"
REPORT_FILE = "report.txt"


def find_duplicates(js_text: str):
    """
    Durchsucht den gegebenen JavaScript-Text nach CARD_SETS
    und sammelt alle front/back-Werte zusammen mit ihrem Kontext
    (Set-Name, Zeilennummer).

    Gibt ein Dict zurück:
      front_string -> Liste von (set_name, line_number, back_value).
    """
    # front_value -> list of (set_name, line_number, back_value)
    front_map = {}
    current_set_name = "UNBEKANNTES SET"

    # Regex für name: "..." oder '...'
    name_pattern = re.compile(r'name\s*:\s*("([^"]+)"|\'([^\']+)\')')

    # Regex für front und back: "..." oder '...'
    front_pattern = re.compile(r'front\s*:\s*("([^"]+)"|\'([^\']+)\')')
    back_pattern = re.compile(r'back\s*:\s*("([^"]+)"|\'([^\']+)\')')

    lines = js_text.splitlines()

    # Für den Fall, dass front und back NICHT in derselben Zeile stehen:
    pending_front = None  # Tuple (front_value, set_name, line_number)

    for line_number, line in enumerate(lines, start=1):
        # Set-Namen aktualisieren, wenn eine name-Zeile gefunden wird
        m_name = name_pattern.search(line)
        if m_name:
            current_set_name = m_name.group(2) if m_name.group(2) is not None else m_name.group(3)

        # front-Eintrag finden
        m_front = front_pattern.search(line)
        m_back = back_pattern.search(line)

        if m_front and m_back:
            # front und back in derselben Zeile
            front_value = m_front.group(2) if m_front.group(2) is not None else m_front.group(3)
            back_value = m_back.group(2) if m_back.group(2) is not None else m_back.group(3)
            front_map.setdefault(front_value, []).append(
                (current_set_name, line_number, back_value)
            )
            pending_front = None  # sicherheitshalber zurücksetzen
        elif m_front:
            # front gefunden, aber (noch) kein back
            front_value = m_front.group(2) if m_front.group(2) is not None else m_front.group(3)
            pending_front = (front_value, current_set_name, line_number)
        elif m_back and pending_front is not None:
            # back in einer späteren Zeile gefunden, verknüpfe mit letztem front
            back_value = m_back.group(2) if m_back.group(2) is not None else m_back.group(3)
            front_value, set_name, front_line = pending_front
            front_map.setdefault(front_value, []).append(
                (set_name, front_line, back_value)
            )
            pending_front = None
        else:
            # Weder front noch (zugehöriges) back – nichts zu tun
            continue

    # Nur die Duplikate herausfiltern
    duplicates = {
        front: occurrences
        for front, occurrences in front_map.items()
        if len(occurrences) > 1
    }
    return duplicates


def write_report(duplicates):
    """
    Schreibt report.txt mit allen gefundenen Duplikaten.
    Überschreibt eine bestehende Datei.
    """
    with open(REPORT_FILE, "w", encoding="utf-8") as f:
        if not duplicates:
            f.write("Keine Duplikate gefunden.\n")
            return

        f.write("Duplikat-Report für data.js\n")
        f.write("================================\n\n")

        for front_value, occurrences in sorted(duplicates.items(), key=lambda x: x[0]):
            f.write(f'Front-Wert: "{front_value}"\n')
            f.write(f"Anzahl Vorkommen: {len(occurrences)}\n")
            for set_name, line_number, back_value in occurrences:
                if back_value is None:
                    back_value = "<kein back gefunden>"
                f.write(f"  - Set: {set_name} (Zeile {line_number})\n")
                f.write(f'    Back: "{back_value}"\n')
            f.write("\n")


def main():
    # Pfad zu data.js im selben Ordner wie dieses Skript
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(script_dir, DATA_FILE)

    if not os.path.exists(data_path):
        raise FileNotFoundError(f"{DATA_FILE} nicht gefunden im Ordner: {script_dir}")

    with open(data_path, "r", encoding="utf-8") as f:
        js_text = f.read()

    duplicates = find_duplicates(js_text)
    write_report(duplicates)


if __name__ == "__main__":
    main()
