declare namespace umdLib {
    const version: string
    function doSomething(): void
}

export as namespace umdLib // 这条语句对umd库不可缺少。

export = umdLib
