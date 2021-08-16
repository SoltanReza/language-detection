import argparse
from polyglot.detect import Detector
from polyglot.detect.base import Language

parser = argparse.ArgumentParser(description="wellcome to language detector")
parser.add_argument("-d", "--detect", type=str, help="type your text to detect")
parser.add_argument("-p", "--path", type=str, help= "path to file txt")
args = parser.parse_args()
text = args.detect
directory = args.path
# Language_detection.py -d "your text here"
# Language_detection.py -p "/home/username/Desktop/document/Language_detect.txt"
 
if args.detect:
    detector = Detector(text)
    print(detector.language)

elif args.path:
    with open(f'{directory}', 'r') as reader:
        file = reader.read()
        detector_2 = Detector(file)
        print(detector_2.language)
        for line in file.strip().splitlines():
            print(line + u"\n")
        for language in Detector(line).languages:
            print(language)
        print("\n")
