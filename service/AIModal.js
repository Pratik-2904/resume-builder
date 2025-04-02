const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const fs = require("node:fs");
  const mime = require("mime-types");
  
  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };
  
  export const AIChatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

    // export const AIchatSession = model.startChat({
    //   generationConfig,
    //   history: [
    //     {
    //       role: "user",
    //       parts: [
    //         {text: "Job Title: Full Stack React Developer, Depends on job title give me summary for my resume within 4-5 lines"},
    //       ],
    //     },
    //     {
    //       role: "model",
    //       parts: [
    //         {text: "Here are a few options for a 4-5 line resume summary for a Full Stack React Developer, each with a slightly different emphasis:\n\n**Option 1 (Focus on skills):**\n\n> Full-stack developer proficient in React, Node.js, and relational databases.  Experienced in building and deploying scalable web applications.  Expertise in agile development methodologies and RESTful APIs.  Passionate about crafting clean, efficient, and user-friendly code.  Seeking challenging opportunities in a collaborative environment.\n\n\n**Option 2 (Focus on accomplishments):**\n\n> Delivered high-performing web applications using React, Node.js, and PostgreSQL, resulting in a 20% increase in user engagement.  Proficient in building and maintaining RESTful APIs and implementing responsive UI/UX designs.  Experienced in agile development and DevOps practices.  Seeking a role where I can leverage my skills to contribute to innovative projects.\n\n\n**Option 3 (More concise):**\n\n> Results-oriented full-stack developer with expertise in React, Node.js, and database technologies.  Proven ability to design, develop, and deploy high-quality web applications.  Strong problem-solving skills and collaborative team player.  Seeking a challenging role in a dynamic environment.\n\n\n**Option 4 (Focus on specific technologies):**\n\n> Full-stack developer specializing in React, Redux, Node.js, Express.js, and PostgreSQL.  Experience with AWS cloud services and CI/CD pipelines.  Proven ability to deliver scalable and maintainable web applications.  Seeking a role to contribute to a cutting-edge technology team.\n\n\nRemember to tailor the summary to the specific job description you are applying for.  Highlight the skills and accomplishments most relevant to the position.\n"},
    //       ],
    //     },
    //   ],
    // });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // TODO: Following code needs to be updated for client-side apps.
    // const candidates = result.response.candidates;
    // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
    //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
    //     const part = candidates[candidate_index].content.parts[part_index];
    //     if(part.inlineData) {
    //       try {
    //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
    //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
    //         console.log(`Output written to: ${filename}`);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }
    // console.log(result.response.text());
