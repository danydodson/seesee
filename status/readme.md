# http-filecheck
Simple http health check that passes if it successfully reads from a file

```
git clone https://github.com/robzhu/http-filecheck
```

In index.js, change MARKER_FILE to the file you want to check.

```
docker build -t myfilecheck:0.0.1 .
docker run -v /importantDir/marker:/importantDir/marker myfilecheck:0.0.1
```
