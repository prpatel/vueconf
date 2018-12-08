<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Workshops
    p.subheader__description
      strong Monday March 26
      //- strong
      //-   | Location:
      //-   a(href="https://goo.gl/maps/Y9MwJikkhB32", target="_BLANK")  ibis Styles Wrocław
      br
      | Workshops and conference tickets are sold separately.

      //- small
      //-   strong Requirements:
      //-   br
      //-   | - A laptop and a charger
      //-   br
      //-   | - Dev environment ready (Node.js + npm/yarn)
      //-   br
      //-   | - Your favourite editor
    .agenda
      talk(:talk="evanWorkshop", :desc-flex="7")
        //- a.button(slot="ticket", disabled) Sold out
      talk(:talk="chrisWorkshop", :desc-flex="7")
      talk(:talk="sarahWorkshop", :desc-flex="7")
        :markdown-it
          In one day of training, attendees will go from knowing nothing (or very little) about animating in Vue to creating complex effects in performant and visually stunning patterns. The web is more than a document reader, and Vue has unique offerings that make animations not only possible, but possible to do in an organized and state-managed manner.

          What we'll go over is included but not limited to:
          - Working with SVG within Vue components
          - Creating custom directives for animation
          - Using in-out modes to create effective and reusable component composition
          - Using Vue <transition> hooks for external javascript libraries
          - Interpolating state for data visualization with watchers
          - Integration of animation with routers for page transition
        //- a.button(slot="ticket", disabled) Sold out
      talk(:talk="blakeWorkshop", :desc-flex="7")
        :markdown-it
          In Vue.js is quite simple to work with components, and share data among them using events and props - especially in small to medium projects. When an application starts growing, managing components state might become tedious and overwhelming. This is where Vuex comes to our rescue. Vuex is a state management pattern and official library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

          By the end of the workshop, attendees will be able to develop elegant, debuggable, maintainable, and organized applications using a centralized store. No prior experience with Vuex is needed.

          We will answer the common question “When should I use Vuex?” and work on real-world features.

          ## Outline
          - Understanding State Management Patterns
          - What is Vuex and what problems solves
          - Core concepts including Mutations, Actions, and Getters
          - Modularising the store
          - Composing Vuex assets using Higher-Order Functions
          - Implementing Vuex pseudo-cache
          - Best practices, common gotchas, and application architecture
      talk(:talk="introVue", :desc-flex="7")
      //-  :markdown-it
      //-    This workshop will teach you the fundamentals of Vue so you can start being productive and building apps immediately. With visual animations and analogies that make abstract concepts concrete, along with coding challenges that help you learn by doing, you'll have a solid foundation of Vue skills by the end of the day. Brought to you by the teachers at VueMastery.com.
      talk(:talk="vueComponents", :desc-flex="7")
      //-  :markdown-it
      //-    Components are the bread and butter of most modern front-end frameworks, such as Vue.js. They help you structure and manage your application by glueing together your application logic and the interface. However, as an application grows, its components tend to get bigger and harder to reason about.
      //-    This workshop will demonstrate how to efficiently design your components by focusing on maximum flexibility while avoiding premature optimisation. Throughout the workshop, we’ll build a set of components for a preexisting application. Following the evolving requirements, we will then perform a series of refactoring cycles to explore different possible solutions and patterns/anti-patterns. We’ll also talk about good practices for managing responsibilities of our components. By the end of the workshop, you should be able to write future-proof components that are easy to work with and resilient to changes.
      talk(:talk="vueVixens", :desc-flex="7")
      //-  :markdown-it
      //-    Vueconf.US is pleased to partner with VueVixens to bring this full day Vue.js training as part of the event. Details for applying for a VueVixens scholarship will be posted soon!

</template>

<script>
import Talk from '../components/Talk'

export default {
  head: {
    title: 'VueConf US 2019 | Workshops'
  },
  components: { Talk },
  data () {
    return {
      evanWorkshop: {
        type: "talk",
        img: "/img/evan.jpg",
        topic: "A deep dive into Vue",
        author: "Evan You",
        social: [
          {
            github: "https://github.com/yyx990803",
            twitter: "https://twitter.com/youyuxi"
          }
        ],
        authorInfo: "Creator of Vue.js",
        description: "In this workshop we are going to do a deep dive into the two fundamental concepts in Vue: reactivity and rendering. We will explore how Vue detects and reacts to changes, and how Vue compiles your templates into virtual DOM render functions. Based on this knowledge, we will then discuss how to unlock the full potential of Vue with advanced component patterns."
      },
      blakeWorkshop: {
        type: "talk",
        img: "/img/alexk.jpg",
        topic: "Vuex Demystified - Application State Management",
        author: "Alex Kyriakidis, Rolf Haug",
        social: [
          {
            github: "https://github.com/hootlex",
            twitter: "https://twitter.com/hootlex"
          }
        ],
        authorInfo: "Authors of the VueSchool.io and The Vue.js Master Class",
          description: "In Vue.js is quite simple to work with components, and share data among them using events and props - especially in small to medium projects. When an application starts growing, managing components state might become tedious and overwhelming. This is where Vuex comes to our rescue. Vuex is a state management pattern and official library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.\n" +
          "\n" +
          "By the end of the workshop, attendees will be able to develop elegant, debuggable, maintainable, and organized applications using a centralized store. No prior experience with Vuex is needed.\n" +
          "\n" +
          "We will answer the common question “When should I use Vuex?” and work on real-world features."
      },
      sarahWorkshop: {
        type: "talk",
        img: "/img/sarah.jpg",
        topic: "Animated Interfaces with Vue.js",
        author: "Sarah Drasner",
        social: [
          {
            github: "https://github.com/sdras",
            twitter: "https://twitter.com/sarah_edo"
          }
        ],
        authorInfo: "Senior Cloud Developer Advocate at Microsoft\nVue Core Team",
      },
      chrisWorkshop: {
        type: "talk",
        img: "/img/chris.jpg",
        topic: "Proven patterns for building Vue apps",
        author: "Chris Fritz",
        social: [
          {
            github: "https://github.com/chrisvfritz",
            twitter: "https://twitter.com/chrisvfritz",
          }
        ],
        authorInfo: "Consultant\nVue Core Team",
        description: "In this workshop, we'll cover everything you need to know to get started building world-class Vue applications. Topics will include configuring Webpack for single-file components, setting up the most advanced workflows currently possible, how to organize (and reorganize) increasingly complex applications, and more."
      },
         introVue: {
           type: "talk",
           img: "/img/vuemastery.jpg",
           topic: "Intro to Vue",
           author: "Gregg Pollack & Adam Jahr",
           social: [
             {

               twitter: "https://twitter.com/vuemastery",
             }
           ],
           authorInfo: "Teachers at VueMastery.com",
           description: "This workshop will teach you the fundamentals of Vue so you can start being productive and building apps immediately. With visual animations and analogies that make abstract concepts concrete, along with coding challenges that help you learn by doing, you'll have a solid foundation of Vue skills by the end of the day. Brought to you by the teachers at VueMastery.com."
         },
        vueComponents: {
          type: "talk",
          img: "/img/damian.jpg",
          topic: "Ridiculously Reusable Components in Vue.js",
          author: "Damian Dulisz",
          social: [
            {
              github: "https://github.com/shentao",
              twitter: "https://twitter.com/damiandulisz",
            }
          ],
          authorInfo: "Vue.js Core Team Member and Vue.js consultant",
          description: "Components are the bread and butter of most modern front-end frameworks, such as Vue.js. They help you structure and manage your application by glueing together your application logic and the interface. However, as an application grows, its components tend to get bigger and harder to reason about.                          This workshop will demonstrate how to efficiently design your components by focusing on maximum flexibility while avoiding premature optimisation. Throughout the workshop, we’ll build a set of components for a preexisting application. Following the evolving requirements, we will then perform a series of refactoring cycles to explore different possible solutions and patterns/anti-patterns. We’ll also talk about good practices for managing responsibilities of our components. By the end of the workshop, you should be able to write future-proof components that are easy to work with and resilient to changes."
        },
        vueVixens: {
            type: "talk",
            img: "/img/vuevixens.png",
            topic: "Vue Vixens Skulk",
            author: "The Vue Vixens",
            social: [
                {
                    github: "https://github.com/vuevixens",
                    twitter: "https://twitter.com/vuevixens",
                }
            ],
            authorInfo: "Foxy people who identify as women",
            description: "Vueconf.US is pleased to partner with VueVixens to bring this full day Vue.js training as part of the event. Details for applying for a VueVixens scholarship will be posted soon!"
        }

    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__card
  height: 100px
  width: 100%

.agenda__header
  margin-bottom: 20px

.subheader__description
  margin: 0 0 80px
</style>
