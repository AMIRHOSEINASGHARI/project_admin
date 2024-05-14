"use server";

import { S3 } from "aws-sdk";

const ACCESSKEY = process.env.LIARA_ACCESS_KEY;
const SECRETKEY = process.env.LIARA_SECRET_KEY;
const ENDPOINT = process.env.LIARA_ENDPOINT;
const BUCKET = process.env.LIARA_BUCKET_NAME;

export const uploadImage = async (file) => {
  try {
    if (!file) {
      return;
    }

    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });

    const params = {
      Bucket: BUCKET,
      Key: file.name,
      Body: file,
    };

    const response = await s3.upload(params).promise();

    // Get permanent link
    const permanentSignedUrl = s3.getSignedUrl("getObject", {
      Bucket: BUCKET,
      Key: file.name,
      Expires: 31536000, // 1 year
    });
  } catch (error) {
    console.log(error);
    return {
      message: MESSAGES.server,
      status: MESSAGES.failed,
      code: STATUS_CODES.server,
    };
  }
};
