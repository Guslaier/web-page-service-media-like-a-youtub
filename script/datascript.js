function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


let dataweb = {
    "users": [
        {
            "UID": "1000000",
            "PROFILE_IMG": "data/image/n.jpg",
            "NAME_CH": "Nattawooth CH",
            "VIDEO": {
                "0": {
                    "title": "2002 - Anne-Marie (Mix Lyric) _ One Direction, Bruno Mars",
                    "scr": "data/video/2002.mp4",
                    "view": 3446372,
                    "date" : "25/05/2023"
                }
            },
            "PHOTO": {
                "0": "data/image/n.jpg"
            }
        },
        {
            "UID": "1000001",
            "PROFILE_IMG": "data/image/344549075_768599241650262_7833353883066959561_n.jpg",
            "NAME_CH": "คนน่ารักมักมีเจ้าของ CH",
            "VIDEO": {
                "0": {
                    "title": "Ed Sheeran - Thinking Out Loud (Official Music Video)",
                    "scr": "data/video/sdds.mp4",
                    "view": 2145345,
                    "date" : "02/09/2023"
                }
            },
            "PHOTO": {
                "0": "data/photo/download (1) copy.jpg",
                "1": "data/image/344549075_768599241650262_7833353883066959561_n.jpg"
            }
        },
        {
            "UID": "1000002",
            "PROFILE_IMG": "data/image/xn--72czjvzci0ftdsfvb.com_7004a346508d5f06bbe98f6bb37553bc.jpeg",
            "NAME_CH": "เหงาจังเลย CH",
            "VIDEO": {
                "0": {
                    "title": "Bruno Mars - The Lazy Song (Official Music Video)",
                    "scr": "data/video/Bruno Mars - The Lazy Song (Official Music Video).mp4",
                    "view": 2626845471,
                    "date" : "02/09/2023"
                }

            },
            "PHOTO": {
                "0": "data/image/xn--72czjvzci0ftdsfvb.com_7004a346508d5f06bbe98f6bb37553bc.jpeg"
                ,"1":"data/photo/download.jpg"
            }
        },
        {
            "UID": "1000003",
            "PROFILE_IMG": "data/image/large-2-2.png",
            "NAME_CH": "อยากมีแฟนจังเลย CH",
            "VIDEO": {
                "0": {
                    "title": "Sean Kingston - Beautiful Girls (Official HD Video)",
                    "scr": "data/video/Sean Kingston - Beautiful Girls (Official HD Video).mp4",
                    "view": 1171873889,
                    "date" : "03/06/2009"
                },
                "1": {
                    "title": "[THAISUB] What You Know - Two Door Cinema Club",
                    "scr": "data/video/[THAISUB] What You Know - Two Door Cinema Club.mp4",
                    "view": 1387889,
                    "date" : "04/06/2020"
                }
            },
            "PHOTO": {
                "0": "data/image/large-2-2.png"
            }
        },
        {
            "UID": "1000004",
            "PROFILE_IMG": "data/image/4.2-3.jpg",
            "NAME_CH": "ก็คนมันใจง่าย CH",
            "VIDEO": {
                "0": {
                    "title": "Jason Mraz - I'm Yours (Official Video) [4K]",
                    "scr": "data/video/Jason Mraz - I'm Yours (Official Video) [4K].mp4",
                    "view": 752943502,
                    "date" : "15/03/2008"
                }
            },
            "PHOTO": {
                "0": "data/image/4.2-3.jpg"
            }
        }
    ]
}


