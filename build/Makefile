.SILENT :
.PHONY : test-debian test-alpine test


update-dependencies:
	test/requirements/build.sh

test-debian: update-dependencies

test-alpine: update-dependencies

test: test-debian test-alpine
