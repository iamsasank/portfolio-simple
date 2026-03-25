import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"

import "./style.css"

inject({
  mode: import.meta.env.PROD ? "production" : "development",
})

injectSpeedInsights()
