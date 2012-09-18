
build: components index.js buttonset.css
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

all:
	clear
	make clean
	make build

.PHONY: clean
