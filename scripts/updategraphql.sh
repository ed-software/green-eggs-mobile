#!/bin/sh

# Update the schema from the API.
echo "Updating schema.json from API..."
yarn apollo client:download-schema \
	--endpoint $API_URI schema.json

# Generate the typescript typedefs.
echo "Generating typescript type definitions..."
yarn apollo client:codegen \
	--localSchemaFile schema.json \
	--target typescript \
	--outputFlat src/types/graphql.ts
