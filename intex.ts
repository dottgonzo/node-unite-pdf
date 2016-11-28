

import * as child_process from "child_process"
import * as Promise from "bluebird"

import * as pathExists from "path-exists"

interface IOptions {

}

interface IPDFTools {

}


export default class pdftool implements IPDFTools {
    configuration: IPDFTools;

    constructor(options?: IOptions) {

        this.configuration = options

        if (options) {

        }


    }


    unite(files: string): Promise<true> {
        const that = this;
        return new Promise<true>((resolve, reject) => {

            pathExists(files, (err) => {
                if (err) {
                    reject(err)
                } else {
                    child_process.exec("unite -quality 30" + files, (err, stdout, stderr) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(true)
                        }

                    })

                }
            })




        })



    }


}