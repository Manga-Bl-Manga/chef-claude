import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_API_KEY);

export async function getRecipeFromZephyr(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
      const response = await hf.textGeneration({
        model: "HuggingFaceH4/zephyr-7b-beta",
        inputs: `[INST] <<SYS>>
        You are a chef assistant. Create a detailed recipe using some of these ingredients: ${ingredientsString}.
        Return ONLY the recipe in markdown format with # Title, ## Ingredients and ## Instructions sections.
        Do not include the instruction or any conversational text.
        <</SYS>>[/INST]`,
        parameters: {
          max_new_tokens: 1024,
          temperature: 0.7,
          do_sample: false // Makes output more deterministic
        }
      });
  
      // Extract just the recipe part (after [/INST])
      const cleanOutput = response.generated_text.split('[/INST]').pop().trim();
      return cleanOutput || "Could not generate recipe";
  
    } catch (err) {
      return `## Error\n${err.message || "API request failed"}`;
    }
  }