/**
 * Created by basavarajy on 8/14/17.
 */
import React from 'react'
import { Media, Container, Row, Col } from 'reactstrap'
import { NavigationBar, RadioStars, AppDownload, Content, Footer } from 'rf-components'
import PropTypes from 'prop-types'

const contents = {
    listeners: {
        title: 'Listeners',
        pageIntro:
            'RadioFlag provides Listeners with a Social Radio platform that allows them to search, discover and share audio content created by independent, college, internet and international radio DJ’s and Presenters streaming from around the world. Enjoy a ‘Connective Listening’ experience by joining a global audience and many who share your unique interests and tastes.',
        data: [
            {
                header: 'Discover Original Content',
                text:
                    'Search fresh content that is unique and original, not often found on mainstream homogenized radio. Find what interests you by searching genres, keywords, regions, countries, etc. Here you will find Music, Education, Sports, Entertainment, News and Information.'
            },
            {
                header: 'Listen Anytime – Anywhere',
                text:
                    ' With the RadioFlag app, you can access thousands of  streaming radio stations anywhere and anytime. The app is available on iPhone, Android, Blackberry and Windows Phone.'
            },
            {
                header: 'Connect',
                text:
                    'Connect with fellow listeners in your area or anywhere in the world who share your interests and tastes. Post your flags and comments about what you are hearing, so others will subscribe to your listening feed.'
            },
            {
                header: 'Influence',
                text:
                    'Connect with interesting Radio DJ’s / Presenters with unique perspectives,  and flag them and or comment on their Flagcast about what you’re hearing, offer useful feedback and even make requests. You can do the same with Music Artists. Let them know what you think about their music, their concerts, and make requests for new music releases. You can even purchase their music straight from their user profile playlist to show your support. Your activity as a listener in these ways will influence fellow listener behavior and even our trending algorithms.'
            }
        ]
    },
    artists: {
        title: 'Music Artists',
        pageIntro:
            'RadioFlag provides Indie Music Artists with a Social Radio platform that allows them to be discovered by music lovers in over 162 countries, who are searching for emerging bands with an original and fresh sound. With our ‘Connective Listening’ tools, you also have opportunities to get airplay from Independent, Internet and College Radio DJ’s / Presenters who are streaming their music shows from around the world.',
        data: [
            {
                header: 'Get Discovered',
                text:
                    'RadioFlag provides indie Music Artists with a Social Radio platform that allows them to be discovered by music lovers in over 162 countries, who are searching for emerging bands with an original and fresh sound. With our ‘Connective Listening’ tools, you also have opportunities to get airplay from Independent, Internet and College Radio DJ’s / Presenters who are streaming their music shows from around the world.'
            },
            {
                header: 'Connect and Grow your Fan base',
                text:
                    ' With listeners in over 160 countries using the RadioFlag social radio platform, because they want an alternative to what they hear on mainstream radio, and are searching your specific genre of music, there are great opportunities with RadioFlag to connect with listeners to grow your fanbase world wide.'
            },
            {
                header: 'Get Airplay',
                text:
                    'Search and find Radio DJs / Presenters that showcase your genre of music. Then connect on RadioFlag’s Social Radio Platform and vibe with them. Pretty soon, if they like what they see and hear, they are likely to give you Radio Airplay.'
            },
            {
                header: 'Be a RadioStar',
                text:
                    'RadioFlag often launches programs that spotlight select artists on the RadioFlag app. These include ‘Best Artist’ categories during our popular RadioStar Awards, where bands are nominated by radio DJs, and listeners influence the outcome of the contest. Also, when you are recognized by talent evaluators, RadioFlag will feature you in a RadioStar Blog article.'
            }
        ]
    },
    djs: {
        title: "Radio DJ's, Presenters and Hosts",
        pageIntro:
            ' RadioFlag provides independent, college, internet and international radio Dj’s and Presenters a platform that allows them to be discovered and heard by listeners who want unique non-homogenized content from around the world.',
        data: [
            {
                header: 'Grow Your Audience',
                text:
                    'Use our website or our mobile app which is available on Android, iPhone, Windows Phone and Blackberry, allowing you to access a worldwide audience, and so listeners can find the content that you stream on your show, and share with others who have similar interests. With our app downloaded in over 160 countries, you will tap into a user base all over the world.'
            },
            {
                header: 'Connective Listening',
                text:
                    ' RadioFlag continues to develop the ‘Connective Listening’ experience, so with our platform, content creators like you are interacting and sharing with listeners, who are doing the same with fellow listeners. RadioFlag enables you to engage listeners by allowing them to send you feedback in real time during your show. By connecting with your listeners in this way, and even with Artists also using the app, you can take requests, give new bands airplay, and even offer their music for purchase straight from your radio show playlist. Using these tools, you can in real time shape the direction of your show, whether your content is music, talk, news, sports, entertainment, information, etc.'
            },
            {
                header: 'Get Recognized',
                text:
                    'RadioFlag believes in spotlighting its most active and outstanding internet, college and indie radio content creators, giving them the recognition they deserve. We want to give them the exposure mainstream radio presenters are afforded with their big station budgets, leveling the playing field in any way possible. We accomplish this by creating and implementing various programs. These have included radio show awards for ‘best of’ categories, featuring your shows on our ‘RadioStar Blog’, promoting your shows in prominent areas on our website and mobile app, and also additional new programs that are currently  in development.'
            },
            {
                header: 'Launch own network',
                text:
                    'With RadioFlag’s new ‘Private or White Label’ version of its app as we call it, now offered to audio Content Creators, anyone can launch their own internet radio station and network branded all their own. This means although your own branded social radio app will be powered by RadioFlag, and will include all of the same features offered on the current app, it will instead have your colors, logo, station and network name. It will also spotlight your content fist when anyone downloads your new app, before giving users access to the gateway that directs them to all other audio content creators in our network. The app will also enable you to generate revenue for your new radio venture, by offering features that ca help you secure and serve advertisers and sponsors.'
            }
        ]
    }
}

const SectionPage = ({ name }) => (
    <div className="appContainer">
        <NavigationBar transparent={false} universal />
        <div id="brands">
            <header>
                <div className="view">
                    <picture>
                        <source media="(min-width: 768px)" srcSet="img/new/banner.png" />
                        <source media="(min-width: 480px)" srcSet="img/new/banner-bg@3x.png" />
                        <Media
                            object
                            src="img/new/banner-bg@2x.png"
                            className="img-fluid banner-bg"
                        />
                    </picture>
                    <div className="mask">
                        <div className="mask-content">
                            For
                            <h3>{contents[name].title}</h3>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="mx-md-5">
                    <h4 className="text-justify px-3">{contents[name].pageIntro}</h4>
                    <Container className="px-md-5 pb-2" fluid={true}>
                        {contents[name].data.map((content, i) => {
                            return <Content data={content} key={i} />
                        })}
                    </Container>
                </section>
                <section id="app-download">
                    <AppDownload />
                </section>
            </main>
        </div>
        <Footer />
    </div>
)

SectionPage.propTypes = {
    name: PropTypes.oneOf(['listeners', 'artists', 'djs']).isRequired
}
export default SectionPage
