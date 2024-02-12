import { R2_ACCESS_KEY, R2_API_URL, R2_SECRET_KEY } from "$env/static/private";
import { S3Client } from "@aws-sdk/client-s3";

const S3 = new S3Client({
  region: "auto",
  endpoint: R2_API_URL,
  credentials: {
    accessKeyId: R2_ACCESS_KEY,
    secretAccessKey: R2_SECRET_KEY,
  },
});

export { S3 };
