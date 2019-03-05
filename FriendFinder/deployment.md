siriba@DESKTOP-NGQ8QAK MINGW64 ~/Documents/codingBootcamp/homeworks/FriendsFinder/FriendFinder (master)
$ git push heroku master
Enumerating objects: 392, done.
Counting objects: 100% (392/392), done.
Delta compression using up to 12 threads
Compressing objects: 100% (385/385), done.
Writing objects: 100% (392/392), 588.22 KiB | 5.82 MiB/s, done.
Total 392 (delta 67), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 10.x...
remote:        Downloading and installing node 10.15.2...
remote:        Using default npm version: 6.4.1
remote:
remote: -----> Building dependencies
remote:        Prebuild detected (node_modules already exists)
remote:        Rebuilding any native modules
remote:        express@4.16.4 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/express
remote:        accepts@1.3.5 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/accepts
remote:        mime-types@2.1.22 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/mime-types
remote:        mime-db@1.38.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/mime-db
remote:        negotiator@0.6.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/negotiator
remote:        array-flatten@1.1.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/array-flatten
remote:        body-parser@1.18.3 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/body-parser
remote:        bytes@3.0.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/bytes
remote:        content-type@1.0.4 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/content-type
remote:        debug@2.6.9 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/debug
remote:        ms@2.0.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/ms
remote:        depd@1.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/depd
remote:        http-errors@1.6.3 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/http-errors
remote:        inherits@2.0.3 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/inherits
remote:        setprototypeof@1.1.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/setprototypeof
remote:        statuses@1.4.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/statuses
remote:        iconv-lite@0.4.23 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/iconv-lite
remote:        safer-buffer@2.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/safer-buffer
remote:        on-finished@2.3.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/on-finished
remote:        ee-first@1.1.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/ee-first
remote:        qs@6.5.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/qs
remote:        raw-body@2.3.3 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/raw-body
remote:        unpipe@1.0.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/unpipe
remote:        type-is@1.6.16 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/type-is
remote:        media-typer@0.3.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/media-typer
remote:        content-disposition@0.5.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/content-disposition
remote:        cookie@0.3.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/cookie
remote:        cookie-signature@1.0.6 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/cookie-signature
remote:        encodeurl@1.0.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/encodeurl
remote:        escape-html@1.0.3 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/escape-html
remote:        etag@1.8.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/etag
remote:        finalhandler@1.1.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/finalhandler
remote:        parseurl@1.3.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/parseurl
remote:        fresh@0.5.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/fresh
remote:        merge-descriptors@1.0.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/merge-descriptors
remote:        methods@1.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/methods
remote:        path-to-regexp@0.1.7 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/path-to-regexp
remote:        proxy-addr@2.0.4 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/proxy-addr
remote:        forwarded@0.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/forwarded
remote:        ipaddr.js@1.8.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/ipaddr.js
remote:        range-parser@1.2.0 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/range-parser
remote:        safe-buffer@5.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/safe-buffer
remote:        send@0.16.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/send
remote:        destroy@1.0.4 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/destroy
remote:        mime@1.4.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/mime
remote:        serve-static@1.13.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/serve-static
remote:        utils-merge@1.0.1 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/utils-merge
remote:        vary@1.1.2 /tmp/build_fee00447640e64d9c18b9b13a1e84b5e/node_modules/vary
remote:        Installing any new modules (package.json)
remote:        audited 121 packages in 0.856s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Pruning devDependencies
remote:        audited 121 packages in 0.805s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 18.4M
remote: -----> Launching...
remote:        Released v3
remote:        https://friendsfinderhomework.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/friendsfinderhomework.git
 * [new branch]      master -> master

siriba@DESKTOP-NGQ8QAK MINGW64 ~/Documents/codingBootcamp/homeworks/FriendsFinder/FriendFinder (master)
