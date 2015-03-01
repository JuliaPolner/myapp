
Ext.application({
    name: 'Sencha',

    launch: function() {

        Ext.create('Ext.data.TreeStore', {
            storeId: 'TreeStore',
            fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                name: 'leaf',
                defaultValue: true
            }],
            root: {
                leaf: false
            },
            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://daytodayfail.wordpress.com/feed/',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });        
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

          


		   items: [
               
			   {
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    
					
					
					styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'My wonderfull sparkling Blog'
                },
					
					
					
					
					
					
					html: [
                        '',
                        'Welcome to my wonderfull sparkling Blog',
                        "Wonderfull and sparkling",
                        
						 
                    ].join("")
                },
                {
                    xtype: 'nestedlist',
                    title: 'Posts',
                    iconCls: 'star',
                    displayField: 'title',

                    store: 'TreeStore',

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                }
                
            ]
        });
    }
});