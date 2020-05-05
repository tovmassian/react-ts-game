#!/bin/bash
deploy_dir=dist

rm -rf $deploy_dir && mkdir $deploy_dir

# buld js bundles
webpack --env.platform=web && \
webpack --env.platform=server && \

# install dependencies
cp "package.json" $deploy_dir && \
cd $deploy_dir && \
npm i
