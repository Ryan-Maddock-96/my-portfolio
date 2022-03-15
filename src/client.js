import sanityClient from '@sanity/client';

export default sanityClient ({
    projectId: "ygois1ny",
    dataset: "production",
    apiVersion: '2022-03-15',
    useCdn: false
});