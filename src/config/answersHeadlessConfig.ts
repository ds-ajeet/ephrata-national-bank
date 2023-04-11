
export const AnswerExperienceConfig = {
  locale: "en",
  limit:30,
  apiKey : "85f69c5d28211e425485a23fd439120f",
  verticalKey : "locations",
  experienceKey : "ephrata-national-bank",
  experienceVersion: "STAGING",
  locationRadius: 804672,
  sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",

  }
  // https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=usa&api_key=f557ca0fd6f1daae1e92882690f5d099&v=20181201&resolvePlaceholders=true&entityTypes=location
}