function hideForms() {
  [...document.forms]
    .forEach((form, ix) => {
      if (ix > 0) {
        form.classList.add('hidden');
      }
    });
}

const resultDiv = document.getElementById('result');
function fillResultDiv(textContent) {
  resultDiv.textContent = textContent;
}

function doRequest({
  url,
  method = 'GET',
  headers,
  body,
}) {
  return fetch(url, {
    method,
    headers,
    body,
  })
    .then((response) => response.text())
    .then(fillResultDiv)
    .catch(console.error);
}

document.getElementById('controls')
  .addEventListener('change', ({ target }) => {
    const formId = target.value;

    hideForms();
    document.getElementById(formId).classList.remove('hidden');
  });

const actionMap = {
  get_list() {
    const url = `${window.location.origin}/api/book`;
    const method = 'GET';

    doRequest({
      url,
      method,
    });
  },
  get_book(form) {
    const id = form.querySelector('input[name="id"]').value || null;
    const url = `${window.location.origin}/api/book/${id}`;
    const method = 'GET';

    doRequest({
      url,
      method,
    });
  },
  create_book(form) {
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const url = `${window.location.origin}/api/book`;
    const method = 'PUT';

    doRequest({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
      }),
    });
  },
  remove_book(form) {
    const id = form.querySelector('input[name="id"]').value;
    const url = `${window.location.origin}/api/book/${id}`;
    const method = 'DELETE';

    doRequest({
      url,
      method,
    });
  },
};

document.body.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target: form } = event;
  const formId = form.getAttribute('id');

  if (
    Object.prototype.hasOwnProperty.call(actionMap, formId)
    && actionMap[formId] instanceof Function
  ) {
    actionMap[formId].call(null, form);
  }
});

hideForms();

const radioFormByDefault = document.getElementById('radio_get_list');
radioFormByDefault.checked = true;
radioFormByDefault.dispatchEvent(new Event('change', {
  bubbles: true,
}));

/* const xhr = new XMLHttpRequest();

xhr.open('GET', '/api/book', false);
xhr.responseType = 'json';
xhr.onload = () => {
  console.log(xhr.response);
};
xhr.send(); */
