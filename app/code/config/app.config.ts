// Host Configuration
const host = process.env.API_URL;
export const apiConfig = {
  apiServer: {
    cmsUrl: host + 'cms',
    cmsfinelistUrl: host + 'cmsfinelist',
    cmscorrectfinelistUrl: host + 'cmscorrectfinelist',
    savecmsUrl: host + 'savecms',
    savefiledataUrl: host + 'savefiledata',
    savellpdataUrl: host + 'savellp',
    getllpdataUrl: host + 'getllpdata',
    uploadcmsUrl: host + 'uploadcms',
    getissuedataUrl: host + 'getissuesdata',
    saveissuedataUrl: host + 'saveissuesdata',
    updateissuedataUrl: host + 'updateissuesdata',
    getwebhookdataUrl: host + 'getwebhookdata'
  },
  contentTypeJson: {
    'Content-Type': 'application/json'
  },
  errors: {
    dataSaved: 'data-saved-to-db',
    dataNotSaved: 'data-not-saved-to-db',
    fileUpload: 'file-uploaded',
    fileNotUploaded: 'file-not-uploaded',
    dbConnectError: 'unable-to-connect-to-db',
    dataFetchedFromdb: 'data-fetched-from-db',
    dataFetchFromdbError: 'unable-to-get-data-from-db',
    serverStarted: 'server-started'
  },
  validToken: '9910712381'
};