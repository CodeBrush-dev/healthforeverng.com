// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.healthforeverng.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.healthforeverng.com/","title_tag":"Antioxidant dietary supplement Jobelyn | Health Forever","meta_description":"Jobelyn is a Sorghum bicolor-based antioxidant dietary supplement supporting immune health, blood building and natural wellness in Nigeria."},{"page_url":"https://www.healthforeverng.com/about-1","title_tag":"Sorghum bicolor benefits & Jobelyn | Health Forever","meta_description":"Discover Sorghum bicolor benefits behind Jobelyn, a Nigerian herbal supplement offering antioxidant, immune and blood-supporting properties."},{"page_url":"https://www.healthforeverng.com/benefits-facts","title_tag":"Sorghum bicolor benefits supplement | Health Forever","meta_description":"Learn Sorghum bicolor benefits of Jobelyn: antioxidant support, immune modulation, natural blood boosting, anti-inflammatory and chemopreventive effects."},{"page_url":"https://www.healthforeverng.com/the-science","title_tag":"Antioxidant dietary supplement science | Health Forever","meta_description":"Explore scientific evidence on Jobelyn, a Sorghum bicolor antioxidant dietary supplement with immune, anti-inflammatory and chemopreventive benefits."},{"page_url":"https://www.healthforeverng.com/general-4-1","title_tag":"Diabetes management solutions Jobelyn | Health Forever","meta_description":"Clinical studies explore Jobelyn Sorghum bicolor supplement as a natural diabetes management solution alongside standard Type 2 diabetes therapies."},{"page_url":"https://www.healthforeverng.com/contact-8","title_tag":"Jobelyn supplement Ikeja contact | Health Forever","meta_description":"Contact Health Forever in Ikeja, Lagos for Jobelyn Sorghum bicolor antioxidant dietary supplement, immune support products and wellness information."},{"page_url":"https://www.healthforeverng.com/shop","title_tag":"Immune support products Jobelyn | Health Forever","meta_description":"Shop Jobelyn Sorghum bicolor antioxidant dietary supplement, wellness tea and herbal formulas for immune support, blood health and overall wellness."},{"page_url":"https://www.healthforeverng.com/faq","title_tag":"Health supplements Nigeria FAQ | Health Forever","meta_description":"Get answers about Jobelyn, a Nigerian Sorghum bicolor antioxidant dietary supplement for immune support, energy, anemia support and daily wellness."},{"page_url":"https://www.healthforeverng.com/capsules","title_tag":"Natural blood booster Jobelyn capsules | Health Forever","meta_description":"Buy Jobelyn natural blood booster capsules and other herbal supplements in Nigeria for anemia support, immune health and overall vitality."}],"keywords":["jobelyn supplement ikeja","sorghum bicolor benefits","antioxidant dietary supplement","immune support products","natural blood booster","anti-inflammatory herbal remedy","health supplements nigeria","diabetes management solutions","neurological health support","herbal remedies for anemia"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.healthforeverng.com/#website",
  "url": "https://www.healthforeverng.com/",
  "name": "Health Forever Product Limited",
  "description": "Health Forever Product Limited manufactures Jobelyn, a natural dietary supplement made from Sorghum bicolor leaf sheaths, offering antioxidant, anti-inflammatory, immune support and blood-boosting benefits.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.healthforeverng.com/#organization",
    "name": "Health Forever Product Limited",
    "url": "https://www.healthforeverng.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/76d8df_b1199999957f4abfa81abfc2e2948dfa%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/76d8df_b1199999957f4abfa81abfc2e2948dfa%7Emv2.jpg"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+234 818 957 6022",
        "contactType": "customer service",
        "areaServed": "NG"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://twitter.com/",
      "https://www.linkedin.com/"
    ]
  },
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://www.healthforeverng.com/#localbusiness",
    "name": "Health Forever Product Limited",
    "url": "https://www.healthforeverng.com/",
    "image": "https://static.wixstatic.com/media/76d8df_39c143688239422a9fe9283ce82efa31~mv2.jpg/v1/crop/x_21,y_39,w_530,h_438/fill/w_636,h_526,al_c,lg_1,q_80,enc_avif,quality_auto/IMG-20220920-WA0036.jpg",
    "description": "Health Forever Product Limited is a Nigerian manufacturer of herbal medicines and dietary supplements, including the Sorghum bicolor-based supplement Jobelyn.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Dipeolu Street, Off Obafemi Awolowo Way",
      "addressLocality": "Ikeja",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "telephone": "+234 818 957 6022",
    "email": "healthforeverinfo@gmail.com",
    "areaServed": "NG"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.healthforeverng.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "hasPart": [
    {
      "@type": "Product",
      "@id": "https://www.healthforeverng.com/#product-jobelyn",
      "name": "Jobelyn Natural Dietary Supplement",
      "description": "Jobelyn is a natural dietary supplement made from Sorghum bicolor leaf sheaths with high antioxidant capacity that supports immune function, blood health, anti-inflammatory action and overall wellness.",
      "brand": {
        "@type": "Brand",
        "name": "Jobelyn"
      },
      "image": "https://static.wixstatic.com/media/5554fd_04a458527e1347e88b95f7ea059419ae~mv2.jpg/v1/fill/w_348,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a3-500x500.jpg",
      "url": "https://www.healthforeverng.com/shop",
      "manufacturer": {
        "@type": "Organization",
        "name": "Health Forever Product Limited"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.healthforeverng.com/#faq",
      "url": "https://www.healthforeverng.com/faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does Jobelyn improve health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over time, multiple factors weigh down the immune system and eventually throw it out of balance. These include toxic metals, chemical pollutants, nutritional deficiencies, insufficient exercise and emotional stress. Jobelyn does not attack diseases directly; it strengthens and invigorates the body’s natural defense mechanism in white blood cells, helping the immune system defend the body."
          }
        },
        {
          "@type": "Question",
          "name": "Can Jobelyn provide a cure for sickle-cell anemia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The makers do not claim that Jobelyn can cure sickle-cell anemia, but it may help prevent crises commonly associated with the disease. It has been reported to increase appetite, assist in weight gain and maintain the general well-being of patients."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine Jobelyn with other orthodox or herbal remedies or multivitamins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jobelyn has not been known to have side effects or contraindications and can therefore be combined with other medical products, both orthodox and natural. However, caution is advised when serious illnesses like cancer are being treated with chemotherapy drugs, as these can negatively affect the immune system which Jobelyn supports, potentially slowing its positive effect."
          }
        },
        {
          "@type": "Question",
          "name": "Is Jobelyn toxic? Does it have side effects or contraindications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Research studies cited by the company support the claim that Jobelyn is non-toxic and well tolerated by most patients. It is not known to have any contraindications."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a limit to the period during which I can use Jobelyn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jobelyn can be administered over an indefinite period of time according to the information provided."
          }
        },
        {
          "@type": "Question",
          "name": "Do you recommend Jobelyn for children and pregnant women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jobelyn in capsule form is recommended for children above the age of 5 years. For children below 5, a special powder sachet reconstituted in water is recommended, or capsule content dissolved in water and given in measured doses. It is being successfully administered to pregnant women and has been reported by doctors as a substitute for blood transfusion in some pregnant women with low hemoglobin."
          }
        },
        {
          "@type": "Question",
          "name": "After getting relief from my problem, should I still continue using Jobelyn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The use of Jobelyn is recommended on a prophylactic basis even after relief from the original ailment."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly does Jobelyn provide relief for chronic fatigue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The site states that positive changes in a chronic fatigue patient may be noticed after a period of 48 hours of using Jobelyn."
          }
        },
        {
          "@type": "Question",
          "name": "Should I continue with the use of Jobelyn if I am bleeding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is not recommended that a patient with any form of bleeding should continue to use Jobelyn without a doctor’s intervention."
          }
        },
        {
          "@type": "Question",
          "name": "Should I inform my doctor when using Jobelyn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is advisable for patients to disclose to their healthcare practitioners when using Jobelyn."
          }
        },
        {
          "@type": "Question",
          "name": "I am not ill, why should I use Jobelyn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The site explains that illness often develops gradually and may not show physical signs initially. Jobelyn is positioned as a daily health supplement that can be used prophylactically to support the immune system and overall wellness even when no illness is apparent."
          }
        }
      ]
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
