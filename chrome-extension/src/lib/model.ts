import { createGoogleGenerativeAI } from "@ai-sdk/google"

export const DEFAULT_GEMINI_MODEL = "gemini-3.8-flash"

/**
 * Helper function to initialize and return a Gemini AI model instance.
 * It uses the '@ai-sdk/google' provider to create a model configured with the user's API key.
 */
export const getGoogleModel = (
  apiKey: string,
  modelName: string = DEFAULT_GEMINI_MODEL
) => {
  // Create a Generative AI instance for Google (Gemini)
  const gemini = createGoogleGenerativeAI({
    apiKey: apiKey,
  })

  // Return the specific model version to be used for tutoring
  return gemini(modelName)
}
