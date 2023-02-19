npm run build
aws s3 sync .\build\ s3://leosouquet.com
aws cloudfront create-invalidation --distribution-id ER9E8686G84Q0 --paths '/*' 