;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconshanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.477602 191.991686c-176.642093 0-319.838446 143.196353-319.838446 319.838446 0 176.641069 143.196353 319.838446 319.838446 319.838446 176.642093 0 319.838446-143.198399 319.838446-319.838446C831.316048 335.188039 688.119695 191.991686 511.477602 191.991686zM670.815587 625.778346l-44.861744 44.861744L512.17652 556.862767 398.399197 670.639067l-44.862767-44.861744 113.778346-113.777323L353.53643 398.2237l44.862767-44.862767 113.777323 113.778346L625.953843 353.360933l44.861744 44.862767L557.039287 512.001023 670.815587 625.778346z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.308 800.59c-6.225 0-12.449-2.375-17.197-7.124L249.736 293.092c-9.498-9.498-9.498-24.896 0-34.394 9.498-9.498 24.897-9.498 34.394 0l500.375 500.374c9.498 9.498 9.498 24.896 0 34.395C779.757 798.215 773.533 800.59 767.308 800.59z"  ></path>' +
    '' +
    '<path d="M266.933 800.59c-6.224 0-12.449-2.375-17.197-7.124-9.498-9.498-9.498-24.896 0-34.394l500.375-500.375c9.498-9.498 24.896-9.498 34.395 0 9.498 9.498 9.498 24.896 0 34.394L284.131 793.467C279.382 798.215 273.157 800.59 266.933 800.59z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconxianshimima01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M799.13984 373.818368c-40.419328-28.92288-82.597888-51.959808-125.362176-68.470784C620.429312 284.749824 565.999616 274.306048 512 274.306048c-54.060032 0-108.54912 10.466304-161.953792 31.10912-42.796032 16.541696-85.000192 39.616512-125.44 68.584448-68.885504 49.345536-109.123584 99.191808-109.522944 99.689472-16.91136 21.124096-16.91136 55.497728 0 76.624896 0.400384 0.498688 40.820736 50.526208 109.776896 99.869696 40.419328 28.92288 82.596864 51.958784 125.362176 68.46976 53.348352 20.596736 107.778048 31.040512 161.777664 31.040512 54.060032 0 108.54912-10.466304 161.953792-31.108096 42.796032-16.540672 85.000192-39.615488 125.441024-68.584448 68.885504-49.344512 109.123584-99.18976 109.522944-99.687424 16.909312-21.126144 16.909312-55.5008 0-76.624896C908.483584 473.147392 868.068352 423.141376 799.13984 373.818368zM875.532288 523.474944l-0.00512 0.007168C874.057728 525.315072 726.0672 706.802688 512 706.802688c-212.764672 0-362.029056-181.470208-363.511808-183.303168-4.220928-5.279744-4.260864-17.668096-0.093184-22.877184 1.488896-1.847296 150.249472-183.424 363.604992-183.424 212.832256 0 362.031104 181.47328 363.512832 183.307264C879.731712 505.7792 879.732736 518.218752 875.532288 523.474944z"  ></path>' +
    '' +
    '<path d="M512 363.087872c-81.970176 0-148.658176 66.801664-148.658176 148.912128 0 82.10944 66.688 148.911104 148.658176 148.911104 81.9712 0 148.6592-66.801664 148.6592-148.911104C660.658176 429.889536 593.970176 363.087872 512 363.087872zM512 618.020864c-58.369024 0-105.854976-47.55968-105.854976-106.01984 0-8.654848 1.170432-17.574912 3.478528-26.512384l2.855936-11.060224 6.443008 9.433088c9.817088 14.373888 26.020864 22.955008 43.343872 22.955008 28.951552 0 52.5056-23.59808 52.5056-52.603904 0-14.746624-6.085632-28.463104-17.134592-38.62528l-8.411136-7.735296 11.36128-1.232896c3.90656-0.423936 7.74656-0.638976 11.41248-0.638976C570.368 405.979136 617.854976 453.53984 617.854976 512 617.854976 570.46016 570.368 618.020864 512 618.020864z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconbuxianshimima01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M908.91776 473.689088c-0.434176-0.541696-40.850432-50.548736-109.77792-99.871744-23.58272-16.874496-47.766528-31.729664-72.312832-44.470272l85.704704-85.704704c8.89344-8.886272 8.89344-23.287808 0-32.176128-8.88832-8.88832-23.287808-8.88832-32.176128 0l-97.496064 97.497088c-3.023872-1.234944-6.049792-2.446336-9.079808-3.616768C620.429312 284.749824 565.999616 274.306048 512 274.306048c-54.060032 0-108.54912 10.466304-161.953792 31.10912-42.795008 16.541696-85.000192 39.616512-125.44 68.584448-68.885504 49.345536-109.123584 99.191808-109.522944 99.689472-16.91136 21.124096-16.91136 55.497728 0 76.624896 0.400384 0.498688 40.820736 50.526208 109.776896 99.869696 23.581696 16.874496 47.76448 31.72864 72.310784 44.468224l-85.704704 85.705728c-8.88832 8.886272-8.88832 23.287808 0 32.17408 4.44416 4.44416 10.264576 6.667264 16.088064 6.667264 5.825536 0 11.643904-2.223104 16.088064-6.667264l97.496064-97.496064c3.024896 1.235968 6.052864 2.44736 9.083904 3.617792 53.348352 20.596736 107.778048 31.040512 161.777664 31.040512 54.060032 0 108.54912-10.466304 161.953792-31.108096 42.796032-16.540672 85.000192-39.615488 125.441024-68.584448 68.885504-49.344512 109.123584-99.18976 109.522944-99.687424C925.827072 529.18784 925.827072 494.813184 908.91776 473.689088zM148.488192 523.49952c-4.220928-5.279744-4.260864-17.668096-0.093184-22.877184 1.488896-1.847296 150.249472-183.424 363.604992-183.424 49.675264 0 95.88224 9.887744 137.555968 25.068544l-49.693696 49.693696c-24.630272-18.138112-55.016448-28.87168-87.862272-28.87168-81.970176 0-148.658176 66.801664-148.658176 148.912128 0 32.811008 10.656768 63.17056 28.674048 87.806976l-62.72512 62.726144C218.539008 608.687104 149.494784 524.742656 148.488192 523.49952zM617.856 512c0 58.46016-47.486976 106.01984-105.856 106.01984-21.003264 0-40.597504-6.15936-57.07776-16.768l146.280448-146.280448C611.739648 471.448576 617.856 491.022336 617.856 512zM406.144 512c0-8.654848 1.170432-17.574912 3.478528-26.512384l2.855936-11.060224 6.443008 9.433088c9.817088 14.373888 26.020864 22.955008 43.343872 22.955008 28.951552 0 52.5056-23.59808 52.5056-52.603904 0-14.746624-6.085632-28.463104-17.134592-38.62528l-8.411136-7.735296 11.36128-1.232896c3.90656-0.423936 7.74656-0.638976 11.413504-0.638976 21.003264 0 40.59648 6.15936 57.075712 16.766976L422.796288 569.02656C412.259328 552.5504 406.144 532.977664 406.144 512zM875.532288 523.474944l-0.00512 0.007168C874.057728 525.315072 726.0672 706.802688 512 706.802688c-49.66912 0-95.876096-9.89184-137.551872-25.076736l49.687552-49.687552c24.631296 18.139136 55.017472 28.873728 87.863296 28.873728 81.9712 0 148.6592-66.801664 148.6592-148.911104 0-32.812032-10.656768-63.172608-28.675072-87.810048l62.734336-62.734336c110.76608 53.84704 179.789824 137.8048 180.795392 139.047936C879.732736 505.7792 879.73376 518.218752 875.532288 523.474944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)