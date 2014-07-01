class Backend::StaticPagesController < Backend::ApplicationController

    def index
      @static_pages = StaticPage.all.page(params[:page])
    end

    def new
      static_page
    end

    def create
      if static_page.update_attributes(static_page_params)
        flash[:success] = 'Page was successfully saved'
        redirect_to backend_static_pages_path
      else
        render :new
      end
    end

    def edit
      static_page
    end

    def update
      if static_page.update_attributes(static_page_params)
        flash[:success] = 'Page was successfully updated'
        redirect_to backend_static_pages_path
      else
        render :edit
      end
    end

    def show
      static_page
    end

    def destroy
      if static_page.destroy
        flash[:success] = 'Page was successfully destroyed'
      else
        flash[:error] = 'Page was unsuccessfully destroyed'
      end

      redirect_to backend_static_pages_path
    end

    private

    def static_page
      @static_page ||= if params[:id]
                        StaticPage.find(params[:id])
                      else
                        StaticPage.new
                      end
    end

    def static_page_params
      params.require(:static_page).permit(:code, :title, :description)

        end
end
