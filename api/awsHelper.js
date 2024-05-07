import AWS from 'aws-sdk';
import recipeJson from '../json/recipes';

AWS.config.update({
  accessKeyId: `${process.env.API_ACCESS_KEY}`,
  secretAccessKey: `${process.env.AWS_SECRET_KEY}`,
  region: `${process.env.AWS_REGION}`
});

const s3 = new AWS.S3();

export const fetchRecipeData = async (setRecipeJsonData) => {
  try {
    const params = {
      Bucket: `dsarecipemobile-bucket`,
      Key: `dsarecipe.json`
    };
    const data = await s3.getObject(params).promise();
    if (data != null) {
      const recipeContents = JSON.parse(data.Body.toString());
      setRecipeJsonData(recipeContents);
    } else {
      setRecipeJsonData(recipeJson);
    }
  } catch (error) {
    console.log(`Error fetching JSON data: `, error);
  }
};
