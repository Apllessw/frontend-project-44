install:
	npm ci

game:
	node bin/brain-games.js
	
publish:
	npm publish --dry-run

make lint:
	npx eslint .

brain-even:
	node bin/brain-even.js
	