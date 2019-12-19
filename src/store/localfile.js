const TODO_KEY = 'todoList'
const CATALOG_KEY='catalog'
export default {
    todoFetch: function () {
        return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]');
    },
    todoSave: function (items) {
        window.localStorage.setItem(TODO_KEY, JSON.stringify(items))
    },
    articleFetch: function (ARTICLE_KEY) {
        return JSON.parse(window.localStorage.getItem("article"+ARTICLE_KEY) || '[]');
    },
    articleSave: function (ARTICLE_KEY,items) {
        window.localStorage.setItem("article"+ARTICLE_KEY, JSON.stringify(items))
    },
    catalogFetch: function () {
        return JSON.parse(window.localStorage.getItem(CATALOG_KEY) || '[]');
    },
    catalogSave: function (items) {
        window.localStorage.setItem(CATALOG_KEY, JSON.stringify(items))
    }
}