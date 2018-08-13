import React from 'react'
import { Media } from 'reactstrap'

const AppDownload = () => (
    <div className="view app_download text-center pt-3 pt-md-0">
        <picture className="d-none d-md-block">
            <source media="(min-width: 768px)" srcSet="img/new/app-banner.png" />
            <source media="(min-width: 480px)" srcSet="img/new/app-banner.png" />
            <Media object src="img/new/app-banner.png" className="img-responsive" width="100%" />
        </picture>
        <div className="mask">
            <div className="mask-content">
                <div>
                    <h4 className="d-none d-md-block mb-md-0">
                        DOWNLOAD THE NEW RADIOFLAG <br />APP FOR FREE
                    </h4>
                    <p className="d-none d-md-block mb-md-0">
                        {' '}
                        and start Connective Listening with <br />users in over 160 countries
                    </p>
                    <a
                        href="http://itunes.apple.com/us/app/radioflag/id422745020"
                        target="_blank"
                        className="mr-3">
                        <div className="btn p-0">
                            <Media object src="/img/button-app-store.png" className="img-fluid" />
                        </div>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.app.radioflag&hl=en"
                        target="_blank"
                        className="ml-3">
                        <div className="btn p-0">
                            <Media object src="/img/button-google-play.png" className="img-fluid" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default AppDownload
